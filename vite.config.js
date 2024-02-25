export default defineConfig({
  plugins: [react()],
  base: "/FKP/",
  build: {
    sourcemap: true,
    outDir: "dist", // Change this line
  },
});
