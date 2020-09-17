{{let
title = "Get Involved"
dahufi=""
date = "2020-07-16"
}}{{@md}}\

If you wish to get involved in building this language I would be very grateful, hopefully this will be a fun project for all of us involved.

This website **is** the core language documentation. So adding anything to this website will is adding it to the language.

You can make contributions to the site by making a Pull Request to [github.com/storyfeet/dahufi_site](https://github.com/storyfeet/dahufi_site).

## What content should I be adding?

The priorities right now are writings and vocabulary.

Writing documents in the language is a great way to get a feel for how the language works.

Also reading the writings that exist and if you spot any inconsistencies please suggest fixes.

To add Vocabulary add them it to the relevant language file, on a separate line

	<English>:<Dahufi>

To add writings create them in the writings folder.

Include in the Front Matter

	\{{export
		title="Your title"
		dahufi=" "
		author="Your Name - "
	}}

## What do I need to make additions.

### Github
You will need a [github](github.com) and possibly to learn [how to make a pull request on github](https://linuxhint.com/pull_request_github/). (If this link breaks, send me a PR with a better one)

### Fonts and IMEs

You will need to install the [font](/fonts/dahufi.ttf)

You will need a text editor that can use the font. I currently use [Atom](https://atom.io/). In atom you can add Dahufi to the front of the list of fonts it tries to find a character in.

	Settings -> Editor -> Font Family

You will need some means to type characters.

### In browser

You can use the [typing area](typing_area) to type the roman characters and get them converted.

### Linux

If you are using Linux, you can use the following [Ibus table](/ime/dahufi.db).  Save it to your

	/usr/share/ibus-table/tables

This should make it available to ibus. You will then need to tell Ibus to include it as an IME in the language settings.

### Windows and Mac.

If you manage to set up an IME for either of these I would appreciate it greatly. I don't even know where to begin. Not having either system hinders me here.

### Other tools.

There is a tool for converting romanized dahufi into dahufi characters.

[dahufi_tool](https://crates.io/crates/dahufi)

If you have Rust (and cargo) installed :

	cargo install dahufi_site

To get rust go to [rustup.rs](https://rustup.rs/) and follow the instructions there.

Hopefully I will be able to make the tools easier to access in the near future.
