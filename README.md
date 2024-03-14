# Scrolling of a combobox

This is a test case to demonstrate an issue in the scrolling of a combobox

## To reproduce:

  pnpm install
  pnpm dev

=> observe that you cannot scroll down the list

## Revert to "@react-aria/overlays": "~3.20.0"

At the end of `package.json` add:

```
  "pnpm": {
    "overrides": {
      "@react-aria/overlays": "~3.20.0"
    }
  }
```

Then again:

  pnpm install
  pnpm dev


=> observe that it works!
