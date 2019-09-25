# Mod 5 Curriculum

This is a small static Jekyll site that contains the Mod 5 curriculum and resources.

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

## Getting Started

### Prerequisites

In order to get this repo up and running you will need to have Ruby 2.4.1 installed and active. You will also need the `bundler` and `jekyll` gems installed.

```shell
gem install bundler
gem install jekyll
```

### Installing

Once you have Ruby, Bundler, and Jekyll installed, you can install dependencies by running:

```shell
bundle
```

And after all dependencies are installed, you can run the following to start your local server on port 4000:

```shell
bundle exec jekyll serve
```

### Styling Your Resources

You can add styled boxes to your lesson plans for different areas of content.

#### Standard Box:

```html
<section class="call-to-action">
### In Your Notebook

What would you expect to be logged when we get to line 10? Why?
</section>
```

Will result in the following styled box:

![styled-box](https://user-images.githubusercontent.com/17582916/60548262-e75fd180-9cde-11e9-8964-03c4ee6152d9.png)


#### Note Box:

```html
<section class="note">
### Note

This hoisting behavior adds some complexity to the JavaScript language, and is important to understand thoroughly in order to anticipate the values of your variables at any given time.
</section>
```

![note-box](https://user-images.githubusercontent.com/17582916/60548280-f2b2fd00-9cde-11e9-848c-6d58f4b6ebde.png)

#### CFU/Exit Ticket Box:

```html
<section class="checks-for-understanding">
### Exit Ticket

What are 3 easy and actionable accessibility steps you can take in all of your projects from here on out?
</section>
```

![cfu-box](https://user-images.githubusercontent.com/17582916/60548305-ff375580-9cde-11e9-9e06-739244d68973.png)

**DO NOT INDENT YOUR MARKDOWN** within the section tag, or else it will not work.
