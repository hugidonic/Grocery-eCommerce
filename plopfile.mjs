export default function(plop) {
  plop.setGenerator("Module", {
    description: "Creates a module redux structure",
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter module name',
      },  
    ],
    actions: [
      {
        type: 'add',
        path: './app/modules/{{pascalCase name}}/components/index.ts',
      },
      {
        type: 'add',
        path: './app/modules/{{pascalCase name}}/index.ts',
        template: `export * from './components'
export * from './{{lowerCase name}}.actions'
export * from './{{lowerCase name}}.selectors'
export * from './{{lowerCase name}}.types'
export * from './{{lowerCase name}}.reducer'
export * from './{{lowerCase name}}.constants'`
      },
      {
        type: 'add',
        path: './app/modules/{{pascalCase name}}/{{lowerCase name}}.actions.ts',
      },
      {
        type: 'add',
        path: './app/modules/{{pascalCase name}}/{{lowerCase name}}.selectors.ts',
      },
      {
        type: 'add',
        path: './app/modules/{{pascalCase name}}/{{lowerCase name}}.types.ts',
      },
      {
        type: 'add',
        path: './app/modules/{{pascalCase name}}/{{lowerCase name}}.reducer.ts',
      },
      {
        type: 'add',
        path: './app/modules/{{pascalCase name}}/{{lowerCase name}}.constants.ts',
      },
      {
        type: 'append',
        path: './app/modules/index.ts',
        template: `export * from './{{pascalCase name}}'`
      },
    ],
  })

  plop.setGenerator("Component", {
    description: "Creates a new component",
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "Enter the name of the component",
      }
    ],
    actions: [
      {
        type: 'add',
        path: './app/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/COMPONENT.hbs'
      },
      {
        type: 'append',
        path: './app/components/index.ts',
        template: `export * from './{{pascalCase name}}/{{pascalCase name}}';`,
      }
    ]
  })

  plop.setGenerator("Screen", {
    description: "Creates new Screen",
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter screen name: '
      }
    ],
    actions: [
      {
        type: 'add',
        path: './app/screens/{{pascalCase name}}/{{pascalCase name}}Screen.tsx',
        templateFile: './templates/SCREEN.hbs'
      },
      {
        type: 'append',
        path: './app/screens/index.ts',
        template: `export * from './{{pascalCase name}}/{{pascalCase name}}Screen';`
      },
    ],
  })
}