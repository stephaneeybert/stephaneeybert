(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{lyHG:function(e,i,t){"use strict";t.r(i);var c=t("DUip"),n=t("TYT/"),s=t("17Os"),o=t("vTnB"),r=t("so6N"),u=t("Valr"),b=t("1uuZ"),d=t("jEbo"),v=t("jNFA");function a(e,i){if(1&e&&(n.Zb(0,"tr"),n.Zb(1,"td"),n.Lc(2),n.Ub(3,"midi-synth",2),n.Ub(4,"midi-keyboard",2),n.Ub(5,"midi-sheet",2),n.Yb(),n.Yb()),2&e){var t=i.$implicit;n.Eb(2),n.Nc(" ",t.name," "),n.Eb(1),n.rc("device",t),n.Eb(1),n.rc("device",t),n.Eb(1),n.rc("device",t)}}function p(e,i){if(1&e&&(n.Zb(0,"div"),n.Kc(1,a,6,4,"tr",1),n.Yb()),2&e){var t=n.lc();n.Eb(1),n.rc("ngForOf",t.devices)}}function h(e,i){1&e&&(n.Zb(0,"div"),n.Zb(1,"th"),n.Lc(2),n.mc(3,"translate"),n.Yb(),n.Yb()),2&e&&(n.Eb(2),n.Mc(n.nc(3,1,"devices.none")))}var l=function(){function e(e,i,t){this.changeDetector=e,this.deviceStore=i,this.midiService=t}return e.prototype.ngOnInit=function(){this.devices$=this.deviceStore.getDevices(),this.observeDevices(),this.getConnectedDevices(),this.handleDeviceHotPlug(),this.logDeviceHotPlugSubscription=this.midiService.logDeviceHotPlug()},e.prototype.ngOnDestroy=function(){null!=this.devicesSubscription&&this.devicesSubscription.unsubscribe(),null!=this.logDeviceHotPlugSubscription&&this.logDeviceHotPlugSubscription.unsubscribe(),null!=this.midiAccessSubscription&&this.midiAccessSubscription.unsubscribe()},e.prototype.detectChanges=function(){this.changeDetector.detectChanges()},e.prototype.observeDevices=function(){var e=this;this.devicesSubscription=this.deviceStore.getDevices().subscribe((function(i){e.devices=i,e.detectChanges()}))},e.prototype.handleDeviceHotPlug=function(){var e=this;this.midiAccessSubscription=this.midiService.requestMIDIAccess().subscribe((function(i){i.onstatechange=function(i){i.port.state===e.midiService.MIDI_DEVICE_CONNECTED?(console.log("Connected the device: "+i.port.name),e.getConnectedDevices()):i.port.state===e.midiService.MIDI_DEVICE_DISCONNECTED&&(console.log("Disconnected the device: "+i.port.name),e.deviceStore.removeDevice(i&&i.port&&i.port.name?i.port.name:""))}}))},e.prototype.getConnectedDevices=function(){var e=this;this.deviceStore.removeAllDevices(),null!=this.midiInputSubscription&&this.midiInputSubscription.unsubscribe(),this.midiInputSubscription=this.midiService.getInputDevices().subscribe((function(i){e.midiService.addMidiDevice(i)}))},e.\u0275fac=function(i){return new(i||e)(n.Tb(n.h),n.Tb(r.a),n.Tb(o.a))},e.\u0275cmp=n.Nb({type:e,selectors:[["devices"]],decls:8,vars:5,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"device"]],template:function(e,i){1&e&&(n.Zb(0,"table"),n.Zb(1,"thead"),n.Zb(2,"th"),n.Lc(3),n.mc(4,"translate"),n.Yb(),n.Yb(),n.Zb(5,"tbody"),n.Kc(6,p,2,1,"div",0),n.Kc(7,h,4,3,"div",0),n.Yb(),n.Yb()),2&e&&(n.Eb(3),n.Mc(n.nc(4,3,"devices.title")),n.Eb(3),n.rc("ngIf",i.devices.length>0),n.Eb(1),n.rc("ngIf",i.devices.length>0))},directives:[u.l,u.k,b.a,d.a,v.a],encapsulation:2}),e}(),f=function(){function e(){}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=n.Nb({type:e,selectors:[["midi-devices"]],decls:1,vars:0,template:function(e,i){1&e&&n.Ub(0,"devices")},directives:[l],encapsulation:2}),e}(),m=[{path:"",component:function(){function e(){}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=n.Nb({type:e,selectors:[["app-home"]],decls:3,vars:0,template:function(e,i){1&e&&(n.Zb(0,"mat-card"),n.Zb(1,"mat-card-content"),n.Ub(2,"midi-devices"),n.Yb(),n.Yb())},directives:[s.a,s.b,f],encapsulation:2}),e}()}],g=function(){function e(){}return e.\u0275mod=n.Rb({type:e}),e.\u0275inj=n.Qb({factory:function(i){return new(i||e)},imports:[[c.f.forChild(m)],c.f]}),e}(),D=t("vvyD"),S=t("FAep"),y=t("T/Fc");t.d(i,"DeviceModule",(function(){return E}));var E=function(){function e(){}return e.\u0275mod=n.Rb({type:e}),e.\u0275inj=n.Qb({factory:function(i){return new(i||e)},imports:[[g,y.a,D.a,S.a]]}),e}()}}]);