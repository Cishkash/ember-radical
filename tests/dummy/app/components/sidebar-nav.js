import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  layout: hbs`
    <nav>
      {{!-- <img src="http://i.giphy.com/3yFr6ODcNHhrW.gif"/> --}}
      <ul>
        <li>{{link-to 'Home' 'index'}}</li>
        <li>{{link-to 'Getting Started' 'getting-started'}}
          <ul>
            <li>{{link-to 'Cards' 'getting-started.cards'}}</li>
            <li>{{link-to 'Drawers' 'getting-started.drawers'}}</li>
            <li>{{link-to 'Dropdowns' 'getting-started.dropdowns'}}</li>
            <li>{{link-to 'Modals' 'getting-started.modals'}}</li>
            <li>{{link-to 'Popovers' 'getting-started.popovers'}}</li>
            <li>{{link-to 'Tabs' 'getting-started.tabs'}}</li>
          </ul>
        </li>
        <li>{{link-to 'Docs' 'docs'}}</li>
      </ul>
    </nav>
  `
});