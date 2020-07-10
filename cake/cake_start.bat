(cd cake/entry-js && yarn dist && cd ../../) &&^
del "node_modules/entry-js/dist" /s /q &&^
xcopy "cake/entry-js/dist" "node_modules/entry-js/dist" /s /y &&^
del "node_modules/entry-hw/app/firmwares" /s /q &&^
xcopy "cake/entry-hw/app/firmwares" "node_modules/entry-hw/app/firmwares" /s /y &&^
del "node_modules/entry-hw/app/modules" /s /q &&^
xcopy "cake/entry-hw/app/modules" "node_modules/entry-hw/app/modules" /s /y &&^
electron . --debug