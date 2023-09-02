module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'font-family-name-quotes': null,
    'font-family-no-missing-generic-family-keyword': null,
    'string-quotes': 'single',
    'max-nesting-depth': [
      2,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],
    'max-line-length': 100,
    'max-nesting-depth': 4,
    'declaration-block-no-duplicate-properties': true,
    'no-duplicate-selectors': true,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
  },
}
