Dyatlov map maker
=================

The dyatlov map maker is aimed at displaying a map representation of various wideband shortwave radio receivers available around the world. It is built on top of the Google Maps API.

A fully set-up receiver map instance is hosted at [rx.linkfanel.net](http://rx.linkfanel.net/).

Legend
======

Receivers are represented on the map by color-coded markers. The colors mean as follows:

* ![Red marker](https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7CFD7567) means that the receiver is available, with open user slots. The receiver has a limited user capacity, but at least one user slot is currently available. These are usually [KiwiSDR receivers](http://kiwisdr.com/) with at most 4 public user slots.
* ![Yellow marker](https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7CFFFF6E) means that the receiver has reached maximum capacity and all its user slots are currently busy. It should be available again a bit later, whenever a current user stopped using it.
* ![Green marker](https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7C00E74C) means that the receiver is generally available although there is no current dynamic status data for it. Currently, these are hand-picked wideband custom receiver setups, running [PA3FWM's WebSDR software](http://websdr.org/) or the original [OpenWebRX software](http://sdr.hu/openwebrx); they can normally be expected to accept new users at all times.
* ![Purple marker](https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7C9067FD) means that there is a receiver at this location, but it seems temporarily offline or inacessible. Most often, it will be back online at a later time.

Please note that the availability data is not refreshed in real time and the colors are not always reliable, and are only an indication of what you can expect. You might still get lucky trying! (Or unlucky!)

Receiver sources
================

We believe in shortwave for everyone, newcomers and seasoned users alike. We believe in easy one-click access to the waves: because it can and should be as simple as that. This is why we favor wideband shortwave receivers that offer a web-based, free and open access to the public.

The dyatlov map maker supports merging and combining several data sources at the same time to display receivers from different listings on the same map. For now, ready-to-use support is included for:

* a static configuration file featuring a hand-picked list of receivers
* the [KiwiSDR.com receiver network](http://kiwisdr.com/public/), with dynamic availability updates

We will study and work to include more receiver networks in the future.

Inspiration
===========

The original people and interests behind the dyatlov map maker are associated with [priyom.org](http://priyom.org/) and foremost geared towards numbers stations, shortwave utilities and other radio oddities. In reference to this, this map maker is named after the Russian [Dyatlov Pass incident](https://en.wikipedia.org/wiki/Dyatlov_Pass_incident) oddity.

These signals of interest span anywhere on the shortwave spectrum, and are not limited to some amateur or broadcast bands for example. This is why the dyatlov map maker targets wideband shortwave receivers.
