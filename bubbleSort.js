function bubbleSort(arr) {
    let sorted = false;
    
    while (!sorted){
        sorted = true;
        
        for (var i =0; i <arr.length;i++){
            if (arr[i] > arr[i+1]){
                sorted = false;
                let b = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=b;
            }
        }
    }
}
