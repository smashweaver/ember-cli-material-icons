import Component from '@ember/component';
import layout from '../templates/components/md-icon';
import { computed, get } from '@ember/object';

let MdIcon = Component.extend({
  layout,

  classNames: ['material-icons'],

  classNameBindings: [
    'isSpin:is-spin',
    'isPulse:is-pulse',
    'is2x:x2'
  ],

  tagName: 'i',

  is2x: false,
  
  icon: computed(function() {
    let [icon] = get(this, 'params');
    return icon;
  })
});

MdIcon.reopenClass({
  positionalParams: 'params'
});

export default  MdIcon;