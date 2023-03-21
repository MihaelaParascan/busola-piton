g=0
input.calibrate_compass()
def on_forever():
    global g
    g=input.compass_heading()
    if g>=45 and g<135:
        basic.show_string("E")
    elif g>=135 and g<225:
        basic.show_string("S")
    elif g>=225 and g<315:
        basic.show_string("W")   
    elif g>=315 or g<45:
        basic.show_string("N")
basic.forever(on_forever)                              
