# React admin template MUI

## Table of Contents

- [Installing](#installing)
  - [Requirements](#requirements)
  - [Run locally](#run-locally)
- [Developing](#developing)
  - [Tech stack](#tech-stack)
    - [Language](#language)
    - [Core Frameworks](#core-frameworks)
    - [State Manager](#state-manager)
    - [UI Libraries](#ui-libraries)
    - [Chart Libraries](#chart-libraries)
  - [Content guide](#content-guide)
    - [Project Structure](#project-structure)
    - [Component folder structure](#component-folder-structure)
    - [Store folder structure](#store-folder-structure)
    - [Component Structure](#component-structure)
- [Deploying](#deploying)
  - [Tag vX.Y.Z](#tag-v-x-y-z)
  - [Deploy to Dev Environment](#deploy-to-dev-environment)
  - [Deploy to Prod Environment](#deploy-to-prod-environment)

## Installing

### Requirements:

- [Node.js](https://nodejs.org/uk/) 16 or higher
- [Yarn package manager](https://yarnpkg.com/)

### Run locally

1. Install dependencies

```bash
yarn install
```

2. Start dev server

```bash
yarn start
```

3. Open `http://localhost:3000` in a browser

## Developing

### Tech stack

#### Language

- [TypeScript](https://www.typescriptlang.org/docs/)

#### Core Frameworks

- [React](https://reactjs.org/)


#### UI Libraries

- [MUI](https://mui.com/material-ui/getting-started/installation/)


### Content guide

#### Project structure

- [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/)

```
app/
  public/
    favicon.ico
  src/
    assets/
      images/
    components/
      atoms/
      molecules/
      organisms/
      templates/
    core/
      constants/
      types/
      hooks/
      hocs/
      helpers/
    pages/
    styles/
    utils/
```

#### Component folder structure

```
organisms/
  Modal/
    hooks/
      useModal.ts
      useModal.utils.ts
    Modal.tsx
    Modal.test.tsx
    Modal.styles.ts
    Modal.types.ts
    Modal.utils.ts
```

#### Component structure

```Form.tsx
import React from 'react';
import Auth from 'aws-cognito';
... // internal libraries

import { ... } from '@constants';
import { useValidation } from '@hooks';
... // global helpers

import { ... } from '@atoms';
import { ... } from '@molecules';
import { ... } from '@mui/material';
... // components

import { ... } from './Form.styles';
import { ... } from './Form.utils';
import { FormDataType } from './Form.types';
import { useForm } from './hooks/useForm';
... // component helpers

interface Props extends HTMLAttributes<HTMLFormElement> {
  ...
};

export const Form: React.FC<Props> = ({ onSubmit, ...attributes }) => {
  const [formData, onChange, handleOnSubmit] = useForm(onSubmit);

  if (!formData) {
    return null;
  }

  return (
    <form { ...attributes } onChange={onChange}>
      ...
    <form>
  );
};

```