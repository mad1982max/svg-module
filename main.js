window.onload = () => {
    let svgNameSpace = "http://www.w3.org/2000/svg";
    let bookedColor = '#ffad99';
    let freeColor = '#99ff99';
    let icoWidth = 3;
    let rangeOfTemp = 25;
    let rangeOfOpacity = 120;
    let zoomStep = 1.2;
    let zoom = 1;

    let rooms = [
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 1",
            "temperature": 26,
            "presence": true,
            "booked": false,
            "id": 'product-04-X03-D'
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
            "id": 'product-04-Y04-C'
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
            "id": 'product-04-X11-C'
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
            "id": 'product-04-X-11-I'
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
            "id": 'product-04-Y12-J'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 6",
            "temperature": 20,
            "presence": true,
            "booked": false,
            "id": 'product-04-Y13-D'
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
            "id": 'product-04-X13-C'
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
            "id": 'product-04-X06-C'
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
            "id": 'product-04-X09-D'
        },
        {
            "bookable": true,
            "co2": 300,
            "waitingTimeSec": 0,
            "lux": 153.04,
            "name": "Room 10",
            "temperature": 21,
            "presence": true,
            "booked": true,
            "id": 'product-04-Y11-C'
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
            "id": 'product-04-Y09-I'
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
            "id": 'product-04-Y11-C'
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
            "id": 'product-04-Y06-I'
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
            "id": 'product-04-Y13-C'
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

    let bookable = [];
    let nonBookable = [];

    let tempLayer;
    let zoomStepView = document.getElementById("zoom");
    let zoomInformer = document.getElementById('zoomInformer');
    let zoomer = document.getElementById('zoomer');
    let pointerSvg = document.getElementById('pointerView');
    let svgObj = document.getElementById('svgObj');
    let svgDocument = svgObj.contentDocument;
    let grid = svgDocument.getElementById('svg');
    let main = document.getElementById('main');

    //----------------filter all rooms (parsm - bookkable)----------------------------
    filterBookable(rooms);
    function filterBookable(arr) {
        bookable = arr.filter(space => space.bookable === true);
        nonBookable = arr.filter(space => space.bookable === false);
    }

    //---------------------------showFree & bokkable----------------------------------------
    function highlightRooms() {
        bookable.forEach(el => {
        let color = el.booked ? bookedColor: freeColor;
        console.log(el.id, color)
        grid.getElementById(el.id).firstElementChild.style.cssText = `fill: ${color}; opacity: 0.7`;
    })
}
//----------------show signs and temp------------------------------
    showSigns();
    showTemp();
    highlightRooms();
//--------------------------showSigns------------------------------
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
function showTemp() {
    let signGroupSVG = document.createElementNS(svgNameSpace, 'g');
    signGroupSVG.setAttributeNS(null, 'id', 'temp');
    signGroupSVG.setAttributeNS(null, 'style', 'opacity:0');

    bookable.forEach(el => {
        let {xCenter, yCenter} = getCenterOfRoom(el.id);
        let layer = createTempSign(xCenter, yCenter, el.temperature);
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

//--------------click-----------------------------
    grid.addEventListener("click", click);

    function click(e) {
        console.log(e.target.parentElement.id);
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
//---------------------------------------------------------
function createTempSign(x, y, temp) {
    let newCoord = screenToSVG(x, y);
    let color = temp > rangeOfTemp? 'green': 'red';
    let g = document.createElementNS(svgNameSpace, 'g');
    let circle = document.createElementNS(svgNameSpace, 'circle');
    circle.setAttributeNS(null, 'cx', newCoord.x);
    circle.setAttributeNS(null, 'cy', newCoord.y);
    circle.setAttributeNS(null, 'fill', color);
    circle.setAttributeNS(null, 'r', 1);

    let text = document.createElementNS(svgNameSpace, 'text');
    text.setAttributeNS(null,"font-size","3");
    text.setAttributeNS(null, 'x', newCoord.x);
    text.setAttributeNS(null, 'y', newCoord.y);
    text.setAttributeNS(null, 'dy', 0.35);
    text.setAttributeNS(null, 'text-anchor', 'middle');
    text.setAttributeNS(null, 'font-size', '1px');
    text.setAttributeNS(null, 'style', 'fill:white');
    text.setAttributeNS(null, 'font-weight', 'bold');
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

//---------------------------------------------------
// //---------------ZOOM------------------------
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

        if(zoom < 0.7) {
            tempLayer.setAttribute('style', 'opacity:1');

        } else {
            tempLayer.setAttribute('style', 'opacity:0');
        }
    }

    //     //---------------PAN------------------------

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





















// let zoomPace = 10;

// grid.addEventListener('wheel', zoom)
//  function zoom(e) {
//     let curZoom = +zoomer.value
//     let zoomVal = e.deltaY > 0? curZoom - zoomPace: curZoom + zoomPace;

//     updateLayers(zoomVal);
//     zoomInformer.textContent = Math.round(zoomVal) + "%";
//     zoomer.value = zoomVal;
//  }

// //----------------input zoom------------------
// zoomer.addEventListener("input", function (e) {
//     let curZoom = e.currentTarget.valueAsNumber
//     updateLayers(curZoom);
//     zoomInformer.textContent = Math.round(curZoom ) + "%";
// }, false);

// function updateLayers(zoomVal) {
//     svgObj.style.transform = "scale(" + zoomVal / 100 + ")";

//     tempLayer.style.opacity = calculateOpacity(zoomVal, rangeOfOpacity);
// }

// let calculateOpacity = function(zoomVal, rangeOfOpacity){
//     let result = (zoomVal -  rangeOfOpacity);
//     if(result < 0)
//         return 0;
//     if(result > 1)
//         return 1;
//     return result;
// }






























    
    
//     let zoom = 1;
//     let currentUser = '01';

//     let totalRooms = ['product-04-X06-C','product-04-X06-D','product-04-X03-C','product-04-Y04-D','product-04-Y04-C','product-04-Y06-D','product-04-Y06-C','product-04-Y06-H','product-04-Y06-G','product-04-Y09-D','product-04-Y09-C','product-04-Y11-D','product-04-Y11-C','product-04-Y13-D','product-04-Y13-C','product-04-X13-D','product-04-X13-C','product-04-X-11-I','product-04-X11-C','product-04-X09-C','product-04-X09-D','product-04-X07-G', 'product-04-X11-D', 'product-04-X03-D', 'product-04-Y09-I', 'product-04-Y06-I'];



//     Array.prototype.diff = function(a) {
//         return this.filter(function(i) {return a.indexOf(i) < 0;});
//     };

//     let bookedSquaresArr = [
//         {
//             roomId: 'product-04-Y06-I',
//             userId: '01'
//         },
//         {
//             roomId: 'product-04-X06-C',
//             userId: '01'
//         },
//         {
//             roomId: 'product-04-X11-D',
//             userId: '02'
//         },
//         {
//             roomId: 'product-04-X03-D',
//             userId: '03'
//         },
//         {
//             roomId: 'product-04-Y09-I',
//             userId: '05'
//         }
//     ];

//     let freeRooms = totalRooms.diff(bookedSquaresArr.map(val => val.roomId));

//     let currentUserColor = 'blue';
//     let freeRoomsColor = 'green';
//     let bookedAnotherUserColor = 'red';

//     let zoomStepView = document.getElementById("zoom");
//     let pointerView = document.getElementById('pointerView');
//     let pointerView2 = document.getElementById('pointerView2')

//     let obj = document.getElementById("svgObj1");
//     let svgDocument = obj.contentDocument;
//     let svgInn = svgDocument.getElementById("svg");

//     let pointer = svgDocument.getElementById('pointer');

//     let roomNo = document.getElementById("roomNo");
//     let bookedByCurrent = document.getElementById("bookedByCurrent");
//     let bookedByAnother = document.getElementById("bookedByAnother");
//     let alert = document.getElementById("alert");
    
//     svgInn.addEventListener("click", click);

//     showBookedSquares();
//     lightBookedSquares();
//     lightFreeRooms();

//     function  lightFreeRooms() {
//         freeRooms.forEach(el => {
//             let elSquare = svgDocument.getElementById(el);
//             elSquare.firstElementChild.style.cssText = `fill: ${freeRoomsColor}; opacity: 0.7`;
//         })
//     }

//     function lightBookedSquares() {
//         bookedSquaresArr.forEach(el => {
//             let elSquare = svgDocument.getElementById(el.roomId);
//             if(el.userId === currentUser) {
//                 elSquare.firstElementChild.style.cssText = `fill: ${currentUserColor}; opacity: 0.7`;
//             } else {
//                 elSquare.firstElementChild.style.cssText = `fill: ${bookedAnotherUserColor}; opacity: 0.7`;
//             }
//         })
//     }

//     function showCurrentSquare(id) {
//         roomNo.innerText = id;
//     }

//     function showBookedSquares() {
//         let currentBooked = bookedSquaresArr.filter(val => val.userId === currentUser).map(val => val.roomId).toString();;
//         let anotherBooked = bookedSquaresArr.filter(val => val.userId !== currentUser).map(val => val.roomId).toString();
//         bookedByCurrent.innerText = currentBooked;
//         bookedByAnother.innerText = anotherBooked;
//     }

//     function bookSquare(id) {
//         bookedSquaresArr.push({roomId: id,  userId: currentUser});
//     }

//     function unbookSquare(index) {
//         bookedSquaresArr.splice(index, 1);
//     }

//     function getBookedIndex(id) {
//         let isBookedByCurrentUser;
//         let index = bookedSquaresArr.findIndex(val => {
//             isBookedByCurrentUser = (val.userId === currentUser)? true: false
//             return val.roomId === id
//         })
//         return {index, isBookedByCurrentUser}
//     }
// //-----------------Click on cell---------------------------
//     function click(e) {
//         let squareId = e.target.parentElement.id;
//         showCurrentSquare(squareId);
        
//         if(totalRooms.indexOf(squareId) === -1) {
//             console.log('Not a room');
//             alert.innerText = ' Not a room';
//             return
//         }

//         let {index, isBookedByCurrentUser} = getBookedIndex(squareId);
//         if(index > -1 && isBookedByCurrentUser) {
//             unbookSquare(index);
//             freeRooms.push(squareId);
//             e.target.style.cssText = `fill: ${freeRoomsColor}; opacity: 0.7`;
//             alert.innerText = '';
//         } else if(index > -1 && !isBookedByCurrentUser) {
//             console.log('Its not your room');
//             alert.innerText = ' Not you booked this room'
            
//         } else {
//             bookSquare(squareId);
//             e.target.style.cssText =  `fill: ${currentUserColor}; opacity: 0.7`;
//             alert.innerText = '';
//         }
//         showBookedSquares();
//     }






        
}