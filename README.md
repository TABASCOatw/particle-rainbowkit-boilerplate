<div align="center">
  <a href="https://particle.network/">
    <img src="https://i.imgur.com/xmdzXU4.png" />
  </a>
  <h3>
    Particle RainbowKit Quickstart
  </h3>
</div>

⚡️ Quickstart template for a RainbowKit module with native [Particle Auth](https://docs.particle.network/developers/auth-service) integration. In this specific example, shortcuts for Apple, Google, and Facebook authentication are provided alongside a general Particle Auth configuation, represented as "Particle."

Built using **RainbowKit** (+ Particle extension), **Wagmi**, **Typescript**, and **Particle Auth**.

## 🔑 Particle Auth
Particle Auth, a component of Particle Network's Wallet-as-a-Service, enables seamless onboarding to an application-embedded MPC-TSS/AA wallet facilitated by social login, such as Google, GitHub, email, phone number, etc.

👉 Try the demo: https://web-demo.particle.network/rainbowKit
👉 Learn more about Par

![Particle Auth Example](https://i.imgur.com/czZtg37.png)

## 🛠️ Quickstart

### Clone this repository
```
git clone https://github.com/TABASCOatw/particle-rainbowkit.git
```

### Install dependencies
```yarn install```
OR
```npm install```

### Set environment variables
This project requires a number of keys from Particle Network and WalletConnect to be defined in `.env`. The following should be defined:
- `REACT_APP_APP_ID`, the ID of the corresponding application in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
- `REACT_APP_PROJECT_ID`, the ID of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `REACT_APP_CLIENT_KEY`, the client key of the corresponding project in your [Particle Network dashboard](https://dashboard.particle.network/#/applications).
-  `REACT_APP_WALLETCONNECT_PROJECT_ID`, the project ID of the corresponding project in your [WalletConnect dashboard](https://cloud.walletconnect.com/app)

### Start the project
```npm run dev```
OR
```yarn start```