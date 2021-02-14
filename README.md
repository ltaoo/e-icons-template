# e-icons-template

快速将自己的 `svg icon` 变成和 `@ant-design/icons` 一样的 `npm` 包。

## Publish
将自己的 `svg icon` 根据类型（`filled`、`outlined`）放入根目录的 `svg` 文件夹后即可发布，发布前会自动执行一系列命令，无需关注太多命令。

```bash
npm publish
```

## Usage

发布完成后，即可在自己项目中使用

```bash
yarn add my-icons
```

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { SmileOutlined } from 'my-icons';

function App() {
    return (
        <SmileOutlined />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```
