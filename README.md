# Tutorial de Angular
## Primeros pasos
Para comenzar con la instalción de Angular vamos a tener que tener instalado 
 [Node.js](https://nodejs.org/)

Una vez que ya tengamos node.js vamos a instalar Angular.
```sh
$ sudo npm install -g @angular/cli
```
Con este comando estaríamos instalando el CLI de Angular (Command Line Interface) que nos ayudará con la creación de nuestra estructura base del proyecto.

## Creación del proyecto

Para iniciar un nuevo proyecto vamos a ejecutar el siguiente comando
```sh
$ npm new myApp
```
Veremos que nos pregunta si queremos que nos haga el routing de la app.
<pre>? Would you like to add Angular routing? (y/N) </pre>

En nuestro caso, pondremos que si.

  
  <pre><font color="#00AA00">?</font> <font color="#FFFFFF"><b>Which stylesheet format would you like to use?</b></font> (Use arrow keys)
<font color="#00AAAA">❯ CSS</font> 
  SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com    </pre>
  
Luego nos preguntará, que hojas de estilo usaremos en nuestro proyecto, esto lo eligiremos a gusto. Para este tutorial decidí usar CSS.

## Creando Componentes

Para crear un componente solo basta ejecutar el siguiente comando en nuestra terminal (en el directorio donde tengamos el proyecto)

<pre>
$ng generate component subpage
</pre>

"subpage" es el nombre del componente, ustedes pueden ponerle cualquiera.

<pre><font color="#00AA00">CREATE</font> src/app/subpage/subpage.component.css (0 bytes)
<font color="#00AA00">CREATE</font> src/app/subpage/subpage.component.html (22 bytes)
<font color="#00AA00">CREATE</font> src/app/subpage/subpage.component.spec.ts (635 bytes)
<font color="#00AA00">CREATE</font> src/app/subpage/subpage.component.ts (279 bytes)
<font color="#AAAAAA">UPDATE</font> src/app/app.module.ts (479 bytes)
</pre>

Como pueden ver, se creó una carpeta dentro de "app" llamada "subpage", en la cual encontraremos un archivo:
- .css
- .html 
- .spec.ts 
- .ts 
- y vemos que se nos **actualizo** nuestro **app.module.ts**

Si vamos a nuestro archivo **app.module.ts**
 veremos que se nos agregó una nueva linea de codigo.
<pre>
import { SubpageComponent } from './subpage/subpage.component';
</pre>

y que en las **declarations** del **@ngModule** vamos a encontrar, también, una nueva linea, en la que pone "SubpageComponent"

<pre>
@NgModule({
  declarations: [
    AppComponent,
    SubpageComponent
  ],</pre>

pero, ¿qué hace el *app.module.ts*? Sencillo. Declara todos los componentes y servicios que tengamos en nuestra aplicación.

## Entender el Componente

En el archivo **subpage.component.ts** podremos observar que tenemos un 
<pre>
@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.css']
})
</pre>

En donde el 
- **selector** indicara el nombre con el cual llamaremos a nuestro componente en el HTML del componente principal.
- **templateUrl** tendrá linkeado un **.html**, allí pondremos todo lo que se mostrará en nuestro componente.
- **styleUrls** también tendra linkeado un **.css**, donde ahí aplicaremos todos los estilos que queremos para nuestro componente. Ojo, solo se aplicaran en el **subpage** . 

	Si quisieramos aplicar estilos globales, lo tendremos que hacer en el **src/styles.css**.

Vamos a ver también:
<pre>
export class SubpageComponent implements OnInit {

constructor() { }

  ngOnInit(): void {}
}</pre>

Tenemos:
- La clase **constructor** que se ejecuta una sola vez al principio de toda la instrucción. Allí pondremos asignación de variables o cosas que si o si necesitemos que se ejecuten al principio.
- Todo lo que querramos que se ejecute una sola vez o que requiera las cosas del navegador lo vamos a poner en el **ngOnInit**.

### Demostración

Iremos a nuestro **subpage.component.html** y pondremos
```	
<h1>
  HOLA MUNDO, ESTE ES EL MODULO SUBPAGE
</h1>
```
Ahora correremos la aplicación para ver los cambios
<pre>
ng serve 
</pre>

¿Que pasó? Vemos todo el componente principal, pero ¿el componente subpage?
Facil, recuerdan el selector que nos pone por defecto Angular? Lo tendremos que llamar en el **app.component.html** tal que así:

```
<app-subpage></app-subpage>
```

De esta forma podremos visualizarlo

Una vez que ya tenemos nuestro componente lo podemos usar en cualquier parte del HTML cuantas veces querramos y **sin dañar la estructura**.

## Rutas/ Routing

Hasta ahora como venimos haciendo, nuestro componente solo nos sirve si queremos que se comporte como **modulo** pero no va a servir si lo queremos mostrar como **pagina web**

Para ello existen las **Rutas**

## Configuración

Para empezar primero tenemos que crearlas con el siguiente comando:

<pre>
$ng generate module route
</pre>

El cual nos creará lo siguiente:
<pre><font color="#00AA00">CREATE</font> src/app/route/route.module.ts (191 bytes)
</pre>

Al archivo  **route.module.ts**  lo configuraremos de la siguiente forma:

Lo que tendremos que hacer primero será importar la clase de las rutas:
```
import { RouterModule, Routes} from '@angular/router';
```

Y luego, importaremos también, nuestros componentes:
```
import { AppComponent } from '../app.component';
import { SubpageComponent } from '../subpage/subpage.component';
```

Ahora, una vez importado todo, pasaremos a crear una variable constante que pertenecerá a la clase **Routes** en la cual vamos a definir las rutas de nuestro componente.

```
const routes:Routes=[
  {path: 'home', component: AppComponent},
  {path: 'subpage', component: SubpageComponent},
];
```

Y ahora lo unico que nos quedará hacer, es importar en los *imports* del **NgModule** la clase **RouterModule**, la cual le vamos a pasar el metodo **forRoot** y vamos a pasarle nuestra variable que va a contener las rutas, en nuestro caso, la variable es **routes**

```
    RouterModule.forRoot(routes),
```
Ya casi terminando la configuración, lo unico que nos queda por hacer es exportar el **RouterModule** 

```
  exports: [RouterModule],
```

### Configuración del app.module.ts

Aca tendremos que importar nuestra clase del **route.module** 

```
import {RouteModule} from './route/route.module';
```

Lo que nos queda, es asignarlo en los **imports**

```imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule
  ],
```
Y listo, ya "estarían" funcionando nuestras rutas, pero ¿cómo las vamos a ver?

En el **app.component.html** vamos a incorporar una tag global llamada 
```
<router-outlet></router-outlet>
```
Donde va a "salir" todo lo que tengamos rooteado, es decir, si existe pero no está rooteado no va a mostrar nada.

Ahora bien, tendremos que hacer uso de una nueva funcion llamada **routerLink** 

```
<nav>
  <a href="#" routerLink="/subpage">COMPONENTE SUBPAGE</a>
</nav>
```
¿Cómo funciona? al routerLink le asignaremos el nombre de un directorio (siempre con una barra) que en este caso va a ser **subpage** y aca es donde tienen que tener cuidado, porque el nombre del directorio tiene que *coincidir* con el nombre que le hayamos puesto en el **path** en el **route.module.ts**

Como podran ver, aparecerá "COMPONENTE SUBPAGE" en forma de link, y que una vez que nosotros clickeemos, nos va a cargar nuestro contenido.

### Final

Esto es un poco del potencial de Angular, obviamente cuenta con muchas mas funciones como pueden ser las:
- Pipes
- Service
- Directivas
- Observables

Pero en este tutorial sencillo, decidí enseñar sobre componentes, y rutas para que puedan apreciar el potencial que tiene Angular para la creación de paginas web SPA ya que de esta manera pudimos ver que la *navegación* entre secciones y paginas de la aplicación se realizan de **manera dinamica**, y sobre todo **sin refrescar la pagina** en nigún momento.


