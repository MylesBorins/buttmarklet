/*global _, Tinycon*/

(function () {
  'use strict';
  document.body.appendChild(document.createElement('script')).src = 'https://rawgit.com/tommoor/tinycon/master/tinycon.min.js';
  document.body.appendChild(document.createElement('script')).src = '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.js';

  // select the target node
  var target = document.querySelector('#chat-list');

  var count = 0;
  // create an observer instance
  var observer = new MutationObserver(function (mutations) {
    var message = mutations[0].addedNodes[0].getElementsByTagName('p')[0].innerHTML;
    _.each(message.split(' '), function (word) {
      if (word.match(/butt/i) || word.match(/butts/i) || word.match(/butte/i)) {
        console.log(word);
        count++;
        Tinycon.setBubble(count);
      }
    });
  });

  // configuration of the observer:
  var config = { attributes: true, childList: true, characterData: true };

  // pass in the target node, as well as the observer options
  observer.observe(target, config);
  
}());
