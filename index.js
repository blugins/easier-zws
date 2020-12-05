const { Plugin } = require('@vizality/entities');

module.exports = class EasierZWS extends Plugin {
  onStart () {
    vizality.api.commands.registerCommand({
      command: 'zws',
      description: 'Replaces "zws" with a Zero Width Space character.',
      usage: '{c} <before zws>zws<after zws>',
      executor: (args) => ({
        send: true, 
        result: args.join(' ').replace(/zws/gi, '\u200b')
      })
    });
  }

  onStop () {
    vizality.api.commands.unregisterCommand('zws');
  }
}
