// Code your solution in this file!

function distanceFromHqInBlocks(blocks)
{
    return Math.abs(blocks-42);
}

function distanceFromHqInFeet(blocks)
{
    return distanceFromHqInBlocks(blocks)*264
}

function distanceTravelledInFeet(startBlock,endBlock)
{
    return Math.abs(startBlock-endBlock)*264
}

function calculatesFarePrice(start, destination)
{
    const distance=distanceTravelledInFeet(start,destination);
    let fare;
    if (distance<=400)
    {
        fare=0;   
    }
    else if(distance>=400 && distance <=2000)
    {
        fare=0.02*(distance-400)
    }
    else if(distance>=2001 && distance<=2500)
    {
        fare=25
    }
    else{
        fare="cannot travel that far";
    }
    return fare;

}