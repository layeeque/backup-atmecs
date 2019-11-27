package Mall;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
	
	
		
		Product p1= new Product(1, "jeans", 700, "nike"	," blue", 5, new Supplier("nike","america"), new Comment("good"));
		Product p2= new Product(2, "tshirt", 800, "puma"	," blue", 5, new Supplier("nike","britain"), new Comment("bad"));
		Product p3= new Product(3, "shirt", 700, "peterengland"	," blue", 5, new Supplier("nike","korea"), new Comment("excellent"));
		Product p4= new Product(4, "trousers", 900, "abc"	," blue", 5, new Supplier("nike","china"), new Comment("normal"));
		Product p5= new Product(5, "shirt", 500, "pqr"	," blue", 5, new Supplier("nike","australia"), new Comment("good"));
		Product p6= new Product(6, "pyjamas", 700, "nike"	," blue", 5, new Supplier("nike","america"), new Comment("great"));
		Product p7= new Product(7, "dinnerset", 1000, "nike"	," blue", 5, new Supplier("nike","japan"), new Comment("good"));
		Product p8= new Product(8, "teaset", 700, "nike"	," blue", 5, new Supplier("nike","america"), new Comment("great"));
		Product p9= new Product(9, "shavingcream", 5000, "nike"	," blue", 5, new Supplier("nike","britain"), new Comment("good"));
		Product p10= new Product(10, "hairoil", 200, "nike"	," blue", 5, new Supplier("nike","america"), new Comment("good"));
		Product p11= new Product(11, "hairgel", 700, "gillete"	," blue", 5, new Supplier("nike","china"), new Comment("normal"));
		Product p12= new Product(12, "belt", 250, "gucci"	," blue", 5, new Supplier("nike","america"), new Comment("good"));
		Product p13= new Product(13, "chappals", 160, "nike"	," blue", 5, new Supplier("nike","japan"), new Comment("normal"));
		Product p14= new Product(14, "boots", 5000, "nike"	," blue", 5, new Supplier("nike","korea"), new Comment("excellent"));
		Product p15= new Product(15, "jockey", 30, "nike"	," blue", 5, new Supplier("nike","britain"), new Comment("good"));
		Product p16= new Product(16, "rice", 50, "telengana"	," blue", 5, new Supplier("nike","australia"), new Comment("great"));
		Product p17= new Product(17, "wheat", 10, "up"	," blue", 5, new Supplier("nike","britain"), new Comment("good"));
		Product p18= new Product(18, "bajra", 70, "punjab"	," blue", 5, new Supplier("nike","japan"), new Comment("normal"));
		Product p19= new Product(19, "sugar", 45, "pune"	," blue", 5, new Supplier("nike","america"), new Comment("bad"));
		Product p20= new Product(20, "salt", 5, "tata"	," blue", 5, new Supplier("nike","britain"), new Comment("excellent"));
		
		
		List<Product> arr= new ArrayList<Product>();
		arr.add(p1);
		arr.add(p2);
		arr.add(p3);
		arr.add(p4);
		arr.add(p5);
		arr.add(p6);
		arr.add(p7);
		arr.add(p8);
		arr.add(p9);
		arr.add(p10);
		arr.add(p12);
		arr.add(p13);
		arr.add(p14);
		arr.add(p15);
		arr.add(p16);
		arr.add(p17);
		arr.add(p18);
		arr.add(p19);
		arr.add(p20);
	
		System.out.print("enter your choice for sorting \n1.id \n2.name \n3.price \n4.brand \n5.range \n6.enter the product_id you have buyied");
		Scanner sc=new Scanner(System.in);
		Product.x=sc.nextInt();

		Collections.sort(arr);
		
		
		if(Product.x !=4 && Product.x!=5 && Product.x!=6 )
		{
			for (Product product : arr)
			{
				System.out.println(product);	
			}
		}
		
		if(Product.x ==4)
		{
			System.out.println("enter the brand name you want to see");
			String s=sc.next();
			
			for (Product product : arr)
			{
				if(product.productBrand.equals(s))
				{
				System.out.println(product);	
				}
			}
		}
		
		if(Product.x ==5)
		{
			System.out.println("enter the range upper range");
			int upper=sc.nextInt();
			System.out.println("enter the range lower range");
			int lower=sc.nextInt();
			for (Product product : arr)
			{
				if(product.productPrice>lower && product.productPrice<upper)
				{
				System.out.println(product);	
				}
			}
		}
			
		if(Product.x ==6)
		{
			System.out.println("enter the product_id you have buyied");
			int pid=sc.nextInt();
			
			for (Product product : arr)
			{
				if(product.productID == pid && pid >4000)
				{
					
				System.out.println("amount after discount is"+ product.productPrice*0.8);	
				break;
				}
				
				
				if(product.productID == pid && pid <4000)
				{
					
				System.out.println("amount after discount is"+ product.productPrice*0.9);	
				break;
				}
				
			}
			
			
				
				
					
				
			
		}
			
		
	
	}

}
