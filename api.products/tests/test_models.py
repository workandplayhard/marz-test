from api.models import Products

def test_new_product():
    product_name = 'Test'
    product_photo_url = '/test'
    product_status = 'Active'
    product = Products(
        ProductName=product_name,
        ProductPhotoURL=product_photo_url,
        ProductStatus=product_status
    )
    assert product.ProductName == product_name
    assert product.ProductPhotoURL == product_photo_url
    assert product.ProductStatus == product_status

def test_new_product_error(test_db):
    product_name = 'Test'
    product_photo_url = '/test'
    product_status = 'Active1'
    try:
        product = Products(
            ProductName=product_name,
            ProductPhotoURL=product_photo_url,
            ProductStatus=product_status
        )
        product.save()
    except:
        return
    assert 'Product status field allowed incorrect data' == ''
