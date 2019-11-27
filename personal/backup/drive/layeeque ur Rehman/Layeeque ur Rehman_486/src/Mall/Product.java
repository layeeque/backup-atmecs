package Mall;

public class Product implements Comparable<Product> {
	int productID;
	String productName ;
	double productPrice ;
	String productBrand ;
	String productDescription ;
	int productRating;
	Supplier productSupplier;
	Comment productComments;
	static int x;
	
	public Product(int productID, String productName, double productPrice, String productBrand,
			String productDescription, int productRating, Supplier productSupplier, Comment productComments) {
		super();
		this.productID = productID;
		this.productName = productName;
		this.productPrice = productPrice;
		this.productBrand = productBrand;
		this.productDescription = productDescription;
		this.productRating = productRating;
		this.productSupplier = productSupplier;
		this.productComments = productComments;
	}
	
	
	public Product() {
		super();
	}
	public int getProductID() {
		return productID;
	}
	public void setProductID(int productID) {
		this.productID = productID;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}
	public String getProductBrand() {
		return productBrand;
	}
	public void setProductBrand(String productBrand) {
		this.productBrand = productBrand;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public int getProductRating() {
		return productRating;
	}
	public void setProductRating(int productRating) {
		this.productRating = productRating;
	}
	public Supplier getProductSupplier() {
		return productSupplier;
	}
	public void setProductSupplier(Supplier productSupplier) {
		this.productSupplier = productSupplier;
	}
	public Comment getProductComments() {
		return productComments;
	}
	public void setProductComments(Comment productComments) {
		this.productComments = productComments;
	}


	
	public int compareTo(Product o ) {
		if(x==1)
		{
			
		if(this.productID==o.productID)
		return 0;
		else if(this.productID>o.productID)
			return 1;
		else
			return -1;
		
	}
	if(x==2)
	{
		return this.productName.compareTo(o.productName);
	}
	else{
		
		if(this.productPrice==o.productPrice)
		return 0;
		else if(this.productPrice>o.productPrice)
			return 1;
		else
			return -1;
		
	}
	}
	


	@Override
	public String toString() {
		return "Product [productID=" + productID + ", productName=" + productName + ", productPrice=" + productPrice
				+ ", productBrand=" + productBrand + ", productDescription=" + productDescription + ", productRating="
				+ productRating + ", productSupplier=" + productSupplier + ", productComments=" + productComments + "]";
	}
	
	

}
