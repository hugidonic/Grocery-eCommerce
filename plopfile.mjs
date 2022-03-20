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
        template: `export * from './actions'
export * from './actionTypes'
export * from './reducer'
export * from './constants'`
      },
      {
        type: 'add',
        path: './app/modules/{{pascalCase name}}/actions.ts',
      },
      {
        type: 'add',
        path: './app/modules/{{pascalCase name}}/actionTypes.ts',
      },
      {
        type: 'add',
        path: './app/modules/{{pascalCase name}}/reducer.ts',
      },
      {
        type: 'add',
        path: './app/modules/{{pascalCase name}}/constants.ts',
      },
      {
        type: 'append',
        path: './app/modules/index.ts',
        template: `export * from './{{pascalCase name}}'`
      },
    ],
  })
}