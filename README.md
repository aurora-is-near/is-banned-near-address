# Is Banned NEAR Address

A utility package to check if a NEAR address is banned.

## Installation

```sh
yarn add @aurora-is-near/is-banned-near-address
```

## Usage

```ts
import { isBannedNearAddress } = "@aurora-is-near/is-banned-near-address";

isBannedNearAddress('0x0048501436e6325eff9756d804160dce4aaf3f3f'); // => true
```

It is strongly recommended to not use this directly from the browser. The list
of ~5000 addresses will add ~280KB to the bundle size. Instead, add an API
endpoint to your application or similar and call that to perform the check.
