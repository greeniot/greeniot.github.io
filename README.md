# Green Computing

This is the official repository of the "Green Computing" study group at the summer academy of the Studienstiftung des deutschen Volkes in Leysin. Any announcements, available topics, useful literature, and hardware will be placed here. We plan to make the whole experience as open and inviting as possible.

Please use the [official website](https://greeniot.github.io) as starting point.

## Meta-Data

The repository consists of several meta-data containers:

* Announcements (directory: `_posts`)
* Hardware (directory: `_devices`)
* Instructors (directory: `_instructors`)
* Literature (directory: `_references`)
* Topics (directory: `_topics`)

Each container may be exposed in one to many representations on the website. The name of a file represents its identifier, e.g., the book reference for "Low-Power CMOS Circuits" has the identifier `Low-Power-CMOS-Circuits`. This identifier may be used for cross-references if the field supports it. As an example, the field `literature` of a topic's meta-data contains a list of literature references.

## Layouts

Normally, no new page has to be defined. Otherwise, the following layouts are available as proper targets:

* `master` (bare-layout without links; essentially just the stylesheet and scripts)
* `default` (default design incl. navigation, header, and footer)
* `blogpost` (uses the default layout with one fixed content container)

The design has also been tested on mobile devices.

## License

The website's code uses the [MIT License](LICENSE).

The MIT License (MIT)

Copyright (c) 2016 Power Efficient Computing

All the other repositories are assigned to their own license model. Mostly, this is a creative commons license. Please refer to the specific repository (and / or sub-directory if deviating) for the exact license.