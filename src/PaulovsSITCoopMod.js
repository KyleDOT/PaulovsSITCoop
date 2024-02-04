"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PaulovsSITCoopMod_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaulovsSITCoopMod = void 0;
const tsyringe = require("C:/snapshot/project/node_modules/tsyringe");
const SITCustomTraders_1 = require("./Traders/SITCustomTraders");
let PaulovsSITCoopMod = class PaulovsSITCoopMod {
    static { PaulovsSITCoopMod_1 = this; }
    static Instance;
    static container;
    traders = [];
    preAkiLoad(container) {
        PaulovsSITCoopMod_1.Instance = this;
        this.traders.push(new SITCustomTraders_1.SITCustomTraders());
        for (const t of this.traders) {
            t.preAkiLoad(container);
        }
    }
    postDBLoad(container) {
        for (const t of this.traders) {
            t.postDBLoad(container);
        }
    }
};
exports.PaulovsSITCoopMod = PaulovsSITCoopMod;
exports.PaulovsSITCoopMod = PaulovsSITCoopMod = PaulovsSITCoopMod_1 = __decorate([
    tsyringe.injectable()
], PaulovsSITCoopMod);
module.exports = { mod: new PaulovsSITCoopMod() };
//# sourceMappingURL=PaulovsSITCoopMod.js.map