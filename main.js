window.onload = () => {
    let svgNameSpace = "http://www.w3.org/2000/svg";
    let bookedColor = '#ffad99';
    let freeColor = '#99ff99';
    let icoWidth = 3;
    let rangeOfTemp = 25;
    let zoomStep = 1.2;
    let zoom = 1;
    let bookable = [];
    let nonBookable = [];
    let rooms = 
    [
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 1",
            "temperature": 26,
            "presence": true,
            "booked": false,
            "id": 'product-04-X03-C'
        },
        {
            "bookable": true,
            "co2": 620.16,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 2",
            "temperature": 15,
            "presence": true,
            "booked": false,
            "id": 'product-04-X04-D'
        },
        {
            "bookable": true,
            "co2": 620.16,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 3",
            "temperature": 23.5,
            "presence": true,
            "booked": true,
            "id": 'product-04-X12-C'
        },
        {
            "bookable": true,
            "co2": 620.16,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 4",
            "temperature": 23.5,
            "presence": true,
            "booked": false,
            "id": 'product-04-X13-D'
        },
        {
            "bookable": true,
            "co2": 350,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 5",
            "temperature": 30,
            "presence": true,
            "booked": false,
            "id": 'product-04-Y04-D'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 6",
            "temperature": 20,
            "presence": true,
            "booked": true,
            "id": 'product-04-Y12-D'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 7",
            "temperature": 10,
            "presence": true,
            "booked": false,
            "id": 'product-04-Y04-C'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 8",
            "temperature": 20,
            "presence": true,
            "booked": false,
            "id": 'product-04-Y06-C'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 9",
            "temperature": 30,
            "presence": true,
            "booked": false,
            "id": 'product-04-Y09-D'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 10",
            "temperature": 34,
            "presence": true,
            "booked": false,
            "id": 'product-04-Y12-C'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 11",
            "temperature": 26,
            "presence": true,
            "booked": false,
            "id": 'product-04-X13-I'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 12",
            "temperature": 40,
            "presence": true,
            "booked": false,
            "id": 'product-04-Y09-H'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 13",
            "temperature": 8,
            "presence": true,
            "booked": true,
            "id": 'product-04-Y06-D'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 14",
            "temperature": 19,
            "presence": true,
            "booked": false,
            "id": 'product-04-Y09-C'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 15",
            "temperature": 18,
            "presence": true,
            "booked": true,
            "id": 'product-04-X13-H'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 16",
            "temperature": 22,
            "presence": true,
            "booked": true,
            "id": 'product-04-X-11-H'
        },
        
        {
            "bookable": false,
            "name": "WC",
            "id": 'product-04-Y05-Ha'
        },
        {
            "bookable": false,
            "name": "WC",
            "id": 'product-04-X07-Hb'
        },
        {
            "bookable": false,
            "name": "Elevator",
            "id": 'product-04-X10-Ib'
        },
        {
            "bookable": false,
            "name": "Elevator",
            "id": 'product-04-Y10-Ia'
        }
    ];

    let tempLayer;
    let zoomStepView = document.getElementById("zoom");
    let pointerSvg = document.getElementById('pointerView');
    let svgObj = document.getElementById('svgObj');
    let svgDocument = svgObj.contentDocument;
    let grid = svgDocument.getElementById('svg');
    let currentRoom = document.getElementById('roomNo');
    let alert = document.getElementById('alert');
    let buttonBook = document.getElementById('buttonBook');
    let free = document.getElementById('free');
    let booked = document.getElementById('booked');
    let showTempBtn = document.getElementById('showTemp');
    let reset = document.getElementById('reset');
    //-------------------------------------------------------------------------
    buttonBook.addEventListener("click", book);
    grid.addEventListener("click", click);
    showTempBtn.addEventListener("click", setTemp);
    reset.addEventListener("click", resetTemp);
    
    filterBookable(rooms);
    showRoomsInPanel();
    highlightRooms();
    //showSigns();
    //showTemp();    
//----------------filter all rooms (parsm - bookkable)----------------------------
    function filterBookable(arr) {
        bookable = arr.filter(space => space.bookable === true);
        nonBookable = arr.filter(space => space.bookable === false);
    }
    //--------------------showRoomsText------------------------------------------------------
    function showRoomsInPanel() {
        free.innerText = bookable.filter(room => !room.booked).map(el => el.id).join(', ')
        booked.innerText = bookable.filter(room => room.booked).map(el => el.id).join(', ')
    }
    //-----------------showFree & bokkable--------------------------------
    function highlightRooms() {
        bookable.forEach(el => {
        let color = el.booked ? bookedColor: freeColor;
        grid.getElementById(el.id).firstElementChild.style.cssText = `fill: ${color}; opacity: 0.7`;
    })
}
    
//--------------------------showSigns---deactiv------------------------
    function showSigns() {
        let signGroupSVG = document.createElementNS(svgNameSpace, 'g');
        signGroupSVG.setAttributeNS(null, 'id', 'signs');

        nonBookable.forEach(el => {
            let {xCenter, yCenter} = getCenterOfRoom(el.id);
            let layer = createEl(xCenter, yCenter, el.name);
            signGroupSVG.appendChild(layer); 
        });
        grid.appendChild(signGroupSVG);
    }
//-----------------ShowTemp--------------------------------
    function showTemp(t) {
        let signGroupSVG = document.createElementNS(svgNameSpace, 'g');
        signGroupSVG.setAttributeNS(null, 'id', 'temp');
        signGroupSVG.setAttributeNS(null, 'style', 'opacity:1');

        bookable.forEach(el => {
            let {xCenter, yCenter} = getCenterOfRoom(el.id);
            let layer = createTempSign(xCenter, yCenter, t);
            signGroupSVG.appendChild(layer);
        })
        grid.appendChild(signGroupSVG);
        tempLayer = grid.getElementById('temp');
}
//----------------transformCoord------------------------------
    function screenToSVG(screenX, screenY) {
        let svgPoint = grid.createSVGPoint()
        svgPoint.x = screenX
        svgPoint.y = screenY
        return svgPoint.matrixTransform(grid.getScreenCTM().inverse());
    }
//----------getCenter of room--------------------------------
    function getCenterOfRoom(id) {
            let elDOM = grid.getElementById(id);
            let {left, top, width, height} = elDOM.getBoundingClientRect();
            let xCenter = left + width/2;
            let yCenter = top + height/2;
            return {xCenter, yCenter}
    }

//--------------click on svg-----------------------------    
    function click(e) {
        let curSquare = e.target.parentElement.id;
        let clickedRoom = rooms.find(r => r.id === curSquare);
        if(clickedRoom) {
            currentRoom.innerText = curSquare;
            alert.innerText = '';
            if(clickedRoom.booked) {
                alert.innerText = 'room is booked';
                buttonBook.style.display = 'none';
            } else {
                buttonBook.style.display = 'inherit';
            }
        } else {
            currentRoom.innerText = ''
            alert.innerText = 'NOT A ROOM';
            buttonBook.style.display = 'none';
        }
    }

//------------------set temp-------------------------

function setTemp() {
    if(tempLayer) resetTemp();
    let tempToSet = +document.getElementById('temp').value;
    if(isNumeric(tempToSet) && tempToSet < 41 && tempToSet != 0) showTemp(Math.round(tempToSet))
}
//-----------------isNumber--------------------------
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
//---------------showBookingIcon----------------------
function showBookingIcon() {
    console.log('show button');
    buttonBook.style.display = 'inherit'
}

//---------------create elem---------------------------
function createEl(x, y, fileName) {    
    let newCoord = screenToSVG(x, y);
    let img = document.createElementNS(svgNameSpace, 'image');
    img.setAttributeNS(null, 'x', newCoord.x - icoWidth/2);
    img.setAttributeNS(null, 'y', newCoord.y - icoWidth/2);
    img.setAttributeNS(null, 'width', icoWidth);
    img.setAttributeNS(null, 'height', icoWidth);
    img.setAttributeNS(null, 'href', `../svg/ico/transIco/${fileName}.svg`);
    return img;
}
//-----------------createTempSign---------------------------
function createTempSign(x, y, temp) {
    let newCoord = screenToSVG(x, y);
    let color = temp > rangeOfTemp? bookedColor: freeColor;
    let g = document.createElementNS(svgNameSpace, 'g');
    g.setAttributeNS(null, "pointer-events", "none");
    let circle = document.createElementNS(svgNameSpace, 'circle');
    circle.setAttributeNS(null, 'cx', newCoord.x);
    circle.setAttributeNS(null, 'cy', newCoord.y);
    circle.setAttributeNS(null, 'fill', 'white');
    circle.setAttributeNS(null, 'stroke', color);
    circle.setAttributeNS(null, 'stroke-width', '0.1');
    circle.setAttributeNS(null, 'r', 1);

    let text = document.createElementNS(svgNameSpace, 'text');
    text.setAttributeNS(null,"font-size","3");
    text.setAttributeNS(null, 'x', newCoord.x);
    text.setAttributeNS(null, 'y', newCoord.y);
    text.setAttributeNS(null, 'dy', 0.35);
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttributeNS(null, 'font-size', '1px');
    text.setAttributeNS(null, 'style', 'fill:#b4897d');
    text.setAttributeNS(null, 'font-family', 'arial');
    let textNode = document.createTextNode(temp);
    text.appendChild(textNode);
    g.appendChild(circle);
    g.appendChild(text);
    return g;
}

//-------------coord of pointer-------------------------
grid.addEventListener('mousemove', function(event) {
    pointerSvg.innerHTML = event.clientX + ' : ' + event.clientY;
});

//--------------------------ZOOM------------------------
    grid.onwheel = ZoomInOut;

    function ZoomInOut(e) {
            let wBox = grid.getAttribute('width');
            let hBox = grid.getAttribute('height');
            let [x, y, w, h] = grid.getAttribute('viewBox').split(' ');        
    
            if(e.deltaY > 0) {
                x -= e.clientX / wBox * (w * zoomStep - w);
                y -= e.clientY / hBox * (h * zoomStep - h);
                w *= zoomStep;
                h *= zoomStep;
                zoom *= zoomStep;
    
            } else {
                x -= e.clientX / wBox * (w / zoomStep - w);
                y -= e.clientY / hBox * (h / zoomStep - h);
                w /= zoomStep;
                h /= zoomStep;
                zoom /= zoomStep;            
            }
            zoomStepView.innerText = zoom.toFixed(2);
            let newData = `${+x} ${+y} ${+w} ${+h}`;
            grid.setAttribute('viewBox', newData);              

        // if(zoom < 0.7) {
        //     tempLayer.setAttribute('style', 'opacity:1');
        //     if(zoom < 0.5) {
        //         message.innerText = 'choose a room';
        //         buttonBook.style.display = 'inherit';
        //     }
        // } else {
        //     tempLayer.setAttribute('style', 'opacity:0');
        //     message.innerText = ``
        //     buttonBook.style.display = 'none'
        // }
    }

//------------------------------------PAN------------------------

    if (window.PointerEvent) {
        grid.addEventListener('pointerdown', onPointerDown);
        grid.addEventListener('pointerup', onPointerUp);
        grid.addEventListener('pointerleave', onPointerUp);
        grid.addEventListener('pointermove', onPointerMove);
    } else {
        grid.addEventListener('mousedown', onPointerDown);
        grid.addEventListener('mouseup', onPointerUp);
        grid.addEventListener('mouseleave', onPointerUp);
        grid.addEventListener('mousemove', onPointerMove);

        grid.addEventListener('touchstart', onPointerDown);
        grid.addEventListener('touchend', onPointerUp);
        grid.addEventListener('touchmove', onPointerMove);
    }

    let point = grid.createSVGPoint();
    function getPointFromEvent (event) {
    
    if (event.targetTouches) {
        point.x = event.targetTouches[0].clientX;
        point.y = event.targetTouches[0].clientY;
    } else {
        point.x = event.clientX;
        point.y = event.clientY;
    }    
    
    let invertedSVGMatrix = grid.getScreenCTM().inverse();    
    return point.matrixTransform(invertedSVGMatrix);
    }
    let isPointerDown = false;
    let pointerOrigin;

    function onPointerDown(event) {
    isPointerDown = true;      
    pointerOrigin = getPointFromEvent(event);
    }

    let viewBox = grid.viewBox.baseVal;
    function onPointerMove (event) {    
    if (!isPointerDown) {
        return;
    }
    
    event.preventDefault();
    let pointerPosition = getPointFromEvent(event);
    
    viewBox.x -= (pointerPosition.x - pointerOrigin.x);
    viewBox.y -= (pointerPosition.y - pointerOrigin.y);
    }

    function onPointerUp() {
    isPointerDown = false;
    }

//----------------------------book----------------------------------------
    function book(){
        let current = currentRoom.innerText;
        alert.innerText = `booked`;
        let index = bookable.findIndex(room => room.id === current);
        bookable[index].booked = true;
        grid.getElementById(current).firstElementChild.style.cssText = `fill: ${bookedColor}; opacity: 0.7`;

        showRoomsInPanel();
    } 
//----------------------reset-----------------------------
    function resetTemp() {
        if(!tempLayer) return       
        tempLayer.parentNode.removeChild(tempLayer);
        tempLayer = null;
    }
}

    
    //----------------------zoomToRoom-----------------------------
    // function zoomToRoom(id){
    //     let position = getCenterOfRoom(id);
    //     zoomRoom(position.xCenter.toFixed(2), position.yCenter.toFixed(2));
    // }

    //     function zoomRoom(xPoint, yPoint) {
    //     let wBox = grid.getAttribute('width');
    //     let hBox = grid.getAttribute('height');
    //     let [x, y, w, h] = grid.getAttribute('viewBox').split(' ');        

    //         x -= (xPoint) / wBox * (w / roomZoomClick - w);
    //         y -= (yPoint) / hBox * (h / roomZoomClick - h);
    //         w /= roomZoomClick;
    //         h /= roomZoomClick;
    //         zoom /= roomZoomClick;            
    //     zoomStepView.innerText = zoom.toFixed(2);
    //     let newData = `${+x} ${+y} ${+w} ${+h}`;
    //     grid.setAttribute('viewBox', newData); 
    //     tempLayer.setAttribute('style', 'opacity:1');     
    // }