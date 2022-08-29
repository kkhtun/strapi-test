module.exports = {
  apps: [
    {
      name: "strapi-test", // Your project name
      cwd: "/home/ec2-user/strapi-test", // Path to your project
      script: "npm", // For this example we're using npm, could also be yarn
      args: "start", // Script to start the Strapi server, `start` by default
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
