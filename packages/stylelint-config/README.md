<!--
 * @Author: CyrilChi chiyongmail@163.com
 * @Date: 2024-04-02 18:57:32
 * @LastEditors: CyrilChi chiyongmail@163.com
 * @LastEditTime: 2024-04-09 12:47:06
 * @FilePath: /cyril-lint/packages/stylelint-config/README.md
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
# markdownlint-config-cyril


支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

需要先行安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install stylelint-config-cyril stylelint stylelint-scss --save-dev
```

## 使用

在 `.stylelintrc` 中继承本包:

```json
{
  "extends": "stylelint-config-cyril"
}
```
