# Setup git credentials

This action setup git credentials in the runner to access private git repositories. It is highly recommended to store the credentials as secret and input the secret to the action, rather than hard-coding the credentials in the configuration file.

## Usage

```yaml
- uses: benzene-tech/setup-git-credentials@v1
  with:
    # Token to access private repos
    token: ''
    # Host in which the private repos are hosted
    # Default: 'github.com'
    host: ''
```
