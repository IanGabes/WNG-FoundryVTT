### WnG Foundry

A game system for Foundry VTT, codifying the Warhammer Wrath and Glory rules.

This repository does not allow you to install this repository directly at the moment, it is still a work in progress :(

### Installation

If you aren't sure about how to set your dev environment up or want a more detailed explanation about some of the tools, please [click here](doc/install_walkthrough.md).

1. Install dependencies
```
npm install
```

2. Compile system to `dist` folder.
```
npm run build
```

This command will have webpack watch your repository directory for any changes, and continously compile to the `dist/` folder when you save. A good trick is to symlink the FoundryVTT system folder to `dist/`, and running `npm run build` to auto-update the System when you make changes. On my system, this command looks like:

```
ln -s /home/ian/workspace/WNG-FoundryVTT/dist/ /home/ian/.local/share/FoundryVTT/Data/systems/wng
```

3. Deploy to local foundry server:

```
npm run deploy-local -- '{path-to-target-foundry-system-folder}'
#e.g.
npm run deploy-local -- '/home/ian/.local/share/FoundryVTT/Data/systems/wng'
```
This repository does not allow you to install using URIs directly, the usual Foundry config files are tucked into `config/`. You can use the "continuous deploy" trick in step two if you don't want to constantly deploy versions.
