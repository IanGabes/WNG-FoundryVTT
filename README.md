### Start HEre

1. Install dependencies
```
npm install
```

1. Compile system to `dist` folder
```
npm run build
```

3. Deploy to local foundry server:

```
npm run deploy-local -- '{path-to-target-foundry-system-folder}'
#e.g.
npm run deploy-local -- '/home/ian/.local/share/FoundryVTT/Data/systems/wng'
```

This repository does not allow you to install using URIs, the usual Foundry config files are tucked into `config/`