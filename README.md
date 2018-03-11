# vuejs2-slidetoggle-mixin

### How to import

###### Locally

Register the mixin in any `.vue` component

```
<script>
  import slideToggle from './mixins/slideToggle'

  export default {
    mixins: [ slideToggle ]
  }
</script>
```

###### Globally

Register the mixin where you set up Vue. Commenly this would in `app.js` or `main.js` 

```
import Vue from 'vue';
import slideToggle from './mixins/slideToggle';

Vue.mixin(slideToggle);
```


### How to use

The slideToggle function takes in 2 parameters: 
- `ref`: Has to contain the word *slide* and has to be unique 
- `speed`: in milliseconds. If not speed is entered, default is 400
```
slideToggle('slide1', 220)
```

###### Example

```
<p @click="slideToggle('slide1', 220)">Open list</p>

<ul ref="slide1">
    <li>ListItem</li>
    <li>ListItem</li>
    <li>ListItem</li>
</ul>
```

```
<p @click="slideToggle('slide2')">Open list</p>

<ul ref="slide2">
    <li>ListItem</li>
    <li>ListItem</li>
    <li>ListItem</li>
</ul>
```

*Official VueJS documentation on mixins: [https://vuejs.org/v2/guide/mixins.html](https://vuejs.org/v2/guide/mixins.html)*
