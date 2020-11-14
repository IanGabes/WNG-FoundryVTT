### WnG Foundry

A game system for Foundry VTT, codifying the Warhammer Wrath and Glory rules.

This repository does not allow you to install this repository directly at the moment, it is still a work in progress :(

### Installation

If you aren't sure about how to set your dev environment up or want a more detailed explanation about some of the tools, please [click here](doc/install_walkthrough.md).

1. Install dependencies
```
npm install
```

2. Compile system to `dist` folder
```
npm run build
```

3. Deploy to local foundry server:

```
npm run deploy-local -- '{path-to-target-foundry-system-folder}'
#e.g.
npm run deploy-local -- '/home/ian/.local/share/FoundryVTT/Data/systems/wng'
```
This repository does not allow you to install using URIs directly, the usual Foundry config files are tucked into `config/`