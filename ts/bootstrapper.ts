/**
 * Created by pcarfrey on 6/28/16.
 */

///<reference path="VendingMachine.ts"/>
///<reference path="../typings/Knockout/knockout.d.ts"/>

let machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);