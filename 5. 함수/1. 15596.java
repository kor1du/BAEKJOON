
public class Main {
    public static void main(String[] args) {
        System.out.println("Hey!");
        int[] a={1,2,3,4,5};
        System.out.println(sum(a));
    }

    public static long sum(int[] a){
        int sum=0;
        for(int i=0;i<a.length;i++){
            sum+=a[i];
        }
        return sum;
    }

}
