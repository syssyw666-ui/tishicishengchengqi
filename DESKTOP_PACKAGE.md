# Windows 本地安装包封装

当前项目保留网页版本，同时可以用 Electron 封装为 Windows 本地软件。

## 安装依赖

```bash
pnpm install
```

## 生成安装包

```bash
pnpm run package:win
```

输出目录：

```text
release
```

安装包文件名类似：

```text
TishiCiShengChengQi-0.1.0-Setup.exe
```

## 生成免安装测试版

```bash
pnpm run package:win:dir
```

这会生成一个可直接运行的目录版，适合先测试 Electron 封装是否正常。

## 说明

- 这个安装包只是把现有前端版本包进本地桌面壳中，不影响 Cloudflare Pages 网页部署。
- 为了兼容 Windows 打包工具链，安装包内部英文名为 `PromptGenerator`，软件窗口标题和快捷方式仍使用中文。
- 当前测试封装关闭了 Windows exe 资源编辑步骤，用于绕过本机 `rcedit` 提交失败问题。
- 当前没有接入代码签名证书，所以 Windows 可能会提示未知发布者，这是正常现象。
- 如果要正式分发给大量用户，建议后续购买代码签名证书，并补充自动更新机制。
