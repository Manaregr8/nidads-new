import prisma from "../src/lib/prisma.js";

try {
  const count = await prisma.blog.count();
  console.log("Blog count:", count);
  process.exitCode = 0;
} catch (error) {
  console.error("Prisma smoke test failed:\n", error);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
