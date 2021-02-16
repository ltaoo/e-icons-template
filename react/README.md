# {{ packageName }}

快速将自己的 `svg icon` 变成和 `@ant-design/icons` 一样的 `npm` 包。

## Publish

```bash
yarn && npm publish
```

之后有新增 `icon`，可直接 `npm publish`。

## Usage

发布完成后，即可在自己项目中使用

```bash
yarn add {{ packageName }}
```

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { SmileOutlined } from '{{ packageName }}';

function App() {
    return (
        <SmileOutlined />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```
