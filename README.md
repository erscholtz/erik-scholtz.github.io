# Erik Scholtz

A small Jekyll homepage inspired by ivory HHKB keycaps and terminal interfaces.
HTML and CSS only, with locally served fonts.

## Local development

Install Ruby 3.3 and Bundler. On Windows, use RubyInstaller with Devkit and
complete its MSYS2 setup. Then, from the repository root:

```sh
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000. Edit `index.md` for homepage content,
`_layouts/default.html` for the shared structure, and `assets/css/style.css`
for styling. The visual direction is documented in `DESIGN.md`.

## Build and publish

```sh
bundle exec jekyll build
```

The generated site is in `_site/`. `ruby deploy.rb` and `./deploy.ps1` are
production-build shortcuts; neither publishes anything.

GitHub Pages must use **GitHub Actions** as its source. Pushes to `main`
build and publish the site; pull requests only build. `_config.yml` sets
the domain to `https://erik-scholtz.github.io`, matching the Git remote.
For hosting under a subpath, set `baseurl` accordingly.

`/about` redirects to the introduction, and `/404.html` is the Pages error
document. The leftover untracked `frontend/src/components/` files are
preserved locally and excluded from the Jekyll output.

## Fonts

- [New Heterodox Mono](https://github.com/hckiang/font-new-heterodox-mono), Book and Bold.
- [Inconsolata Nerd Font Mono](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Inconsolata), Regular.

Original font files and licenses are kept in `assets/fonts/`.
