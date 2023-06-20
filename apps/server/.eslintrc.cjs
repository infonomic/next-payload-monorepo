module.exports = {
  extends: ['@org/eslint-config'],
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      settings: {
        react: {
          version: '18' // React is not installed here - so simply set a version to prevent the 'detect' warning
        },
      },
    },
  ],
};
