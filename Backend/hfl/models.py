from django.db import models
from django.core.validators import RegexValidator
from validators import validate_video_extension
from django.utils.translation import ugettext_lazy as _

class Agent(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    office_phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)  # validators should be a list
    mobile_phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)  # validators should be a list
    email = models.EmailField()
    avatar = models.ImageField()
    description = models.TextField()

    def __str__(self):
        return self.first_name + ' ' + self.last_name

class Listing(models.Model):
    LISTING_OPTIONS = (
        ('Commercial', 'Commercial'),
        ('Residential', 'Residential'),
        ('Land', 'Land'),
    )
    STATUS_OPTIONS = (
        ('Available', 'Available'),
        ('Under Contract', 'Under Contract'),
        ('Sold', 'Sold'),
    )

    street_address = models.CharField(max_length=80)
    listing_type = models.CharField(
        max_length=20,
        choices=LISTING_OPTIONS,
        default='Commercial',
    )
    price = models.DecimalField(max_digits=20, decimal_places=2)
    county = models.CharField(max_length=60)
    zip = models.CharField(max_length=20)
    zoning = models.CharField(max_length=100, blank=True)
    agent = models.ForeignKey('Agent', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_OPTIONS, default='Available', blank=True)
    price = models.DecimalField(max_digits=20, decimal_places=2, blank=True)
    property_taxes = models.DecimalField(max_digits=20, decimal_places=2, blank=True)

    def __str__(self):
        return self.street_address

class ListingVideo(models.Model):
    listing = models.ForeignKey(
        'Listing',
        on_delete=models.CASCADE,
    )
    file = models.FileField(upload_to="static/videos/%Y/%m/%d", validators=[validate_video_extension])

class ListingImage(models.Model):
    listing = models.ForeignKey(
        'Listing',
        on_delete=models.CASCADE,
    )
    image = models.ImageField(upload_to="static/images/%Y/%m/%d")
    title = models.CharField(_("Title"), max_length=255, blank=True)

    class Meta:
        verbose_name = _("Picture")
        verbose_name_plural = _("Pictures")

    def __str__(self):
        return self.title


class LandListing(Listing):
    acreage = models.DecimalField(max_digits=20, decimal_places=2, blank=True)

class ResidentialListing(Listing):
    amenities = models.TextField(blank=True)
    heating = models.CharField(max_length=100, blank=True)
    cooling = models.CharField(max_length=100, blank=True)
    utilities = models.CharField(max_length=100, blank=True)
    rent_potential = models.DecimalField(max_digits=20, decimal_places=2, blank=True)
    hoa = models.BooleanField()
    hoa_dues = models.DecimalField(max_digits=20, decimal_places=2, blank=True)
    extras = models.TextField(blank=True)
    garage = models.BooleanField()
    square_feet = models.DecimalField(max_digits=20, decimal_places=2, blank=True)
    appliances = models.CharField(max_length=100, blank=True)


class CommercialListing(Listing):
    average_utilities = models.DecimalField(max_digits=20, decimal_places=2, blank=True)
    truck_bays = models.DecimalField(max_digits=20, decimal_places=2, blank=True)
    slab_depth = models.DecimalField(max_digits=20, decimal_places=2, blank=True)
    ceiling_height = models.IntegerField(blank=True)
    air_conditioned_space = models.IntegerField(blank=True)
