package myrestful;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class Restful {
	@Autowired
	Dao d;

	@RequestMapping(value="add", method=RequestMethod.POST,headers="Accept=application/json")
	public void addEmp(@RequestBody Pojo emp)
	{
		System.out.println("Inside ADD EMPLOYEE");
		d.register(emp);
	}

}
