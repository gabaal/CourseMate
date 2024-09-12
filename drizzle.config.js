/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://CourseMate_owner:ZUqayKR71hxC@ep-plain-hill-a2v0ir6r.eu-central-1.aws.neon.tech/CourseMate?sslmode=require",
  },
};
