<div align="center">
  <a href="https://particle.network/">
    <img src="https://i.imgur.com/xmdzXU4.png" />
  </a>
  <h3>
    Particle RainbowKit Boilerplate
  </h3>
</div>

⚡️ Boilerplate for a RainbowKit module with native [Particle Auth](https://docs.particle.network/developers/auth-service) integration. In this specific example, shortcuts for Apple, Google, and Facebook authentication are provided alongside a general Particle Auth configuration, represented as "Particle."

Built using **RainbowKit** (+ Particle extension), **Wagmi**, **Typescript**, and **Particle Auth**.

## 🔑 Particle Auth
Particle Auth, a component of Particle Network's Wallet-as-a-Service, enables seamless onboarding to an application-embedded MPC-TSS/AA wallet facilitated by social login, such as Google, GitHub, email, phone number, etc.

👉 Try the demo: https://web-demo.particle.network/rainbowKit

👉 Learn more about Particle Network: https://particle.network

![Particle Auth Example](https://i.imgur.com/czZtg37.png)

##

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/TABASCOatw/particle-rainbowkit-boilerplate&env=REACT_APP_PROJECT_ID&env=REACT_APP_CLIENT_KEY&env=REACT_APP_APP_ID&env=REACT_APP_WALLETCONNECT_PROJECT_ID&envDescription=Head%20over%20to%20the%20Particle%20dashboard%20to%20retrieve%20the%20above%20keys.&envLink=https%3A%2F%2Fdashboard.particle.network">
    <img src="https://vercel.com/button" alt="Deploy with Vercel"/>
  </a>
</p>

## 🛠️ Quickstart

### Clone this repository
```
git clone https://github.com/TABASCOatw/particle-rainbowkit-boilerplate.git
```

### Install dependencies
```
yarn install
```
OR
```
npm install
```

### Set environment variables
This project requires a number of keys from Particle Network and WalletConnect to be defined in `.env`. The following should be defined:
- `REACT_APP_APP_ID`, the ID of the corresponding application in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
- `REACT_APP_PROJECT_ID`, the ID of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `REACT_APP_CLIENT_KEY`, the client key of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `REACT_APP_WALLETCONNECT_PROJECT_ID`, the project ID of the corresponding project in your [WalletConnect dashboard](https://cloud.walletconnect.com/app)

### Start the project
```
npm run dev
```
OR
```
yarn dev
```

##
Originally featured in "[Supercharging UX in 3, 2, and 6 minutes](https://twitter.com/TABASCOweb3/status/1707969225229529288)"
