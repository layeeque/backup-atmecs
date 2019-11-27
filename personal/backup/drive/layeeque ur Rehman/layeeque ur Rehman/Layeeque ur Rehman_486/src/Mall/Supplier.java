package Mall;

public class Supplier {
	
	String name;
	String address;
	public Supplier(String name, String address) {
		super();
		this.name = name;
		this.address = address;
	}
	public Supplier() {
		super();
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Supplier [name=" + name + ", address=" + address + "]";
	}
	

}
