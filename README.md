# React Marvel App

A react application who can search marvel heroes and save heroes list.
The user can chose heroes as favorites

## Requirements

Use props\
Use state\
Use maps, key\
Use Material UI\
Use local storage\
Use fetch + postman to request and verify the api\
Use routing

## React Interview questions

1 - Qu'est ce que le React?\
React.js est un framework javascript cest à dire qu'il est composé entre autre de bibliotheques javascript et nous permet de développer le coté front-end d'une application web. Le code de notre application -qui utilise un framework javascript- est traduit en javascript.

2- Quels sont les avantages du React?
Flexibilité contrairement à Angular car React.js nous permet de choisir entre EcmaScript et TypeScript, et nous permet d'ajouter des packages selon le besoin du projet comme le routing,... .\
De plus, React.js a des hautes performances grace au mecanisme du Virtual Dom.

3- Qu'est ce que le virtual DOM?\
Les manipulations sur le DOM sont des opérations qui sont lourdes, détruire et recreer tout le DOM peut prendre du temps, faire ralentir ou faire bugger notre application web.\
Le virtual DOM, c'est une cope du vrai DOM et quand il y aura des évènements qui vont se produire dans notre application, c'est la virtual DOM qui va changer. React va comparer le virtual DOM et le vrai DOM, puis modifier le vrai DOM en fonction.

4- Qu'est ce que le jsx?\
Le jsx est une extension du langage javascript. On code en jsx et React traduira le jsx en javascript. La synthaxe ressemble au html.

5- Quels sont les différents types de components en React? Quelles sont les différences entre ces types de components?\
Les différents types de components sont class component et function component.\
Dans un class component, on a le mot clé class. La classe aussi doit hériter d'une autre classe qui s'appelle Component et qui se trouve dans la librairy 'react'. Et enfin, on doit utiliser la méthode render qui retournera la vue qui sera rendu pour ce component.

6- Qu'est ce qui va entrainer que React va mettre à jour nos components?\
Un changement dans nos Props ou dans notre state entrainera un ré-render de nos components.

7- En react, que sont les Props?\
Les Props en React sont des propriétés que l'on passe au component.

8- Quelle est la différence entre les Props et le State dans un component React?\
Les Props contrairement au state sont read-only(en lecture seule).

9- Quelle est la différence entre un application Stateful et Stateless?\
Une application Stateful est une application qui a un(/plusieurs) state(s) contrairement à une application stateless.

10- Qu'est ce que le LifeCycle dans une application React? Quelles sont les différentes phases du cycle de vie d'une application React?\
Le lifeCycle est le cycle de vie d'une application. Le LifeCycle en React comporte 3 phases: \
Mounting: le component est créé et il va être monté dans le DOM.\
Updating, le component va être ré-rendu lorsque ses props ou son state vont changés.\
Unmounting, le component va être enlevé du DOM.

11- Donnez le nom d'une library UI pour React et le nom de 5 components UI de cette library.\
Material UI est une library UI populaire pour React et d'autres frameworks js. Elle comporte notamment les components ui Paper, App Bar, Accordion, Progress, Dialog, Snackbar, Badge, List,.. .

12- Quelle est la différence entre npm et npx?\
Npm est un package manager et permet de rajouter a notre projet des packages, librairies qui se trouvent le npm registery(serveurs de npm).\
Npx est un package runner , qui existe depuis la version 5.2.0 de npm et qui permet d'executer des packages.

13- Lorque l'on clone un projet d'une application react depuis github, que manque t'il au projet? Comment remédier à cela?\
Le dossier node_modules n'est pas importé vers github car il est en général très lourd. Pour le restaurer en local, il faut utiliser la commande npm install sur le cmd qui pointe vers le path de notre projet.

14- Qu'est ce que le Routing? Comment l'utiliser en React?\
Le routing va nous permettre de naviguer à travers les pages de notre application, chaque page ayant une route(url) différente sans pour autant recharger la page de notre application.\
Pour l'utiliser, on doit installer le package react-router-dom et encapsuler notre component App.js de la balise BrowserRouter.

15- Qu'est ce que Redux? \
C'est un conteneur de state car il contient tout le state de notre application dans un store. Un event va dispatcher(envoyer) une action qui sera réceptionné par un reducer dont le role sera de mettre à jour le store.

16- Donner une solution intermédiaire à Redux pour un projet React.\
Maintenir tout le state et les fonctions qui modifient ce state dans le component root(App.js) et faire passer les fonctions au components fils grâce aux props.

17- Lorqu'on cree un projet React avec npx create-react-app, quel module bunder est utilisé? Qu' est ce qu'un module bundler?\
Le module bundler webpack est utilisé lorque l'on cree un projet react avec npx create-react-app. Un module bundler va optimiser notre application en concaténant par exemple tous nos fichiers js, en permettant l'import d'images et en les optimisant grace à des loaders,... .



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)


