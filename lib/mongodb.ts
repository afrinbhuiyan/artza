import { MongoClient, MongoClientOptions } from "mongodb";
// CHANGE 1: Added MongoClientOptions type import for better type safety

// CHANGE 2: Moved URI validation to top (was after initializations)
if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env");
}

const uri = process.env.MONGODB_URI;

// CHANGE 3: Replaced empty options {} with comprehensive connection pooling & timeout config
// OLD: const options = {};
const options: MongoClientOptions = {
  // Connection pool management (prevents too many/few connections)
  maxPoolSize: 10,                    // Don't exceed 10 concurrent connections
  minPoolSize: 5,                     // Keep at least 5 ready for quick access
  
  // Timeouts prevent operations from hanging indefinitely
  maxIdleTimeMS: 45000,               // Close connections idle for 45+ seconds
  serverSelectionTimeoutMS: 5000,     // Max 5s to find MongoDB server
  socketTimeoutMS: 45000,             // Max 45s per operation
  
  // Reliability & durability
  retryWrites: true,                  // Auto-retry if write operation fails
  w: "majority",                      // Require write acknowledgment from majority
};


// CHANGE 4: Better TypeScript type alias (OLD: inline complex type cast on global)
// OLD: let globalWithMongo = global as typeof globalThis & { _mongoClientPromise?: Promise<MongoClient> };
type GlobalWithMongo = typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Prevent multiple clients in dev (hot reloads)
  const globalWithMongo = global as GlobalWithMongo;

  if (!globalWithMongo._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    // CHANGE 5: Added error handling with .catch() (OLD: no error handling)
    globalWithMongo._mongoClientPromise = client
      .connect()
      .catch((err) => {
        console.error("MongoDB connection failed:", err);
        throw err;
      });
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // Production: single instance
  const client = new MongoClient(uri, options);
  // CHANGE 5: Added error handling with .catch() (OLD: no error handling)
  clientPromise = client.connect().catch((err) => {
    console.error("MongoDB connection failed:", err);
    throw err;
  });
}


// CHANGE 6: Added graceful shutdown (NEW FEATURE - was missing)
// Properly close MongoDB connection when app terminates
if (typeof process !== "undefined") {
  process.on("SIGTERM", async () => {
    try {
      const client = await clientPromise;
      await client.close();
      console.log("MongoDB connection closed");
    } catch (err) {
      console.error("Error closing MongoDB:", err);
    }
  });
}

export default clientPromise;