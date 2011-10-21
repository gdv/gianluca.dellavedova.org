---
layout: post
title: Change hotkey to activate Dash in Unity 2D
date: Tue 18 Oct 2011 17:18:19 CEST
tags:
- ubuntu
- unity-2d
---

## Change hotkey to activate Dash in Unity 2D

I am a big fan of Unity 2D. Yes, I really like that, [esr's opinion](http://esr.ibiblio.org/?p=3822)
notwithstanding. Compared to standard unity, it is much smoother and without
annoying eye-candy animations. The only problem is the lack of a simple tool
to configure Unity 2D.

The only option I really want is to change the hotkey for activating the Dash;
the default is the Super key (that usually means the Win key), which is not ok
with me, as I remapped the Win key to the Meta key (much more used inside
Emacs).

After a bit of googling I reached a relevant Ask Ubuntu
[thread](http://askubuntu.com/questions/21934/how-to-change-the-binding-of-windows-key-which-runs-unitys-dash)
which, unfortunately, refers to an older version of Unity-2D. After some
investigation I found that the new command that must be associated to the
hotkey is
    dbus-send --type=method_call  --dest=com.canonical.Unity2d.Dash /Dash com.canonical.Unity2d.Dash.activateHome

To choose the hotkey you can follow the path System settings ->  keyboard
settings and finally set the desired shortcut.
