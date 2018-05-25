module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true,
      "node": true,
      "jasmine": true,
    },
    "rules": {
      "semi": 2,
      "react/require-default-props": [0, { forbidDefaultForRequired: false }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [],
        "specialLink": [ "hrefLeft", "hrefRight" ],
        "aspects": [ "noHref", "invalidHref", "preferButton" ]
      }],
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],
      "react/forbid-prop-types": [0],
      "arrow-body-style": ["error", "always"]
  }
};