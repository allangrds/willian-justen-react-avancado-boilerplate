module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/component/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/component/test.tsx.hbs'
      }
    ]
  })

  plop.setGenerator('page', {
    description: 'application page logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'page name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{kebabCase name}}/index.tsx',
        templateFile: 'templates/page/index.tsx.hbs'
      }
    ]
  })
}
